import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#4CAF50', '#F44336', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF6B6B'];

const PieComponent = ({ filteredData, typeOfFilteredData }) => {
  const [data, setData] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const prepareData = () => {
      let prepared = [];
      let sumTotal = 0;

      if (typeOfFilteredData === 'общее') {
        let income = 0;
        let expense = 0;

        filteredData.forEach(item => {
          const parts = item.split('::');
          if (parts.length < 3) return;
          
          const sum = Number(parts[0]) || 0;
          const type = parts[1];
          
          if (type === 'доход') {
            income += sum;
          } else if (type === 'расход') {
            expense += Math.abs(sum);
          }
        });

        prepared = [
          { name: 'Доходы', value: income, rawSum: income, typee: 'доход', commentt: 'Все доходы' },
          { name: 'Расходы', value: expense, rawSum: expense, typee: 'расход', commentt: 'Все расходы' }
        ].filter(item => item.value > 0);

        sumTotal = prepared.reduce((acc, item) => acc + item.value, 0);
      } 
      else {
        const aggregatedData = {};

        filteredData.forEach(item => {
          const parts = item.split('::');
          if (parts.length < 3) return;
          
          const sum = Number(parts[0]) || 0;
          const type = parts[1];
          const comment = parts[2];
          
          if ((typeOfFilteredData === 'доходы' && type !== 'доход') || 
              (typeOfFilteredData === 'расходы' && type !== 'расход')) {
            return;
          }

          if (!aggregatedData[comment]) {
            aggregatedData[comment] = {
              name: comment,
              value: Math.abs(sum),
              rawSum: sum,
              typee: type,
              commentt: comment
            };
          } else {
            aggregatedData[comment].value += Math.abs(sum);
            aggregatedData[comment].rawSum += sum;
          }
        });

        prepared = Object.values(aggregatedData).filter(item => item.value > 0);
        sumTotal = prepared.reduce((acc, item) => acc + item.value, 0);
      }

      setTotalSum(sumTotal);
      
      const withPercent = prepared.map(item => ({
        ...item,
        percent: sumTotal > 0 ? item.value / sumTotal : 0
      }));
      
      setData(withPercent);
    };

    prepareData();
  }, [filteredData, typeOfFilteredData]);

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name
  }) => {
    if (percent < 0.02 || !name) return null;

    const isLargeSegment = percent >= 0.07;
    const radius = isLargeSegment 
      ? innerRadius + (outerRadius - innerRadius) * 0.5 
      : outerRadius + 20;
    
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={isLargeSegment ? 'white' : '#666'}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={isLargeSegment ? 12 : 10}
      >
        {isLargeSegment 
          ? `${(percent * 100).toFixed(0)}%` 
          : `${name}`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload || !payload.length) return null;
    
    const data = payload[0].payload;
    const percent = totalSum > 0 ? (data.value / totalSum) * 100 : 0;
    const sign = data.typee === 'расход' ? '-' : '';
    
    return (
      <div className="custom-tooltip" style={{
        background: 'white',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{data.typee === 'доход' ? 'Доход' : 'Расход'}</p>
        <p style={{ margin: '5px 0' }}>{data.name}</p>
        <p style={{ margin: 0 }}>
          Сумма: <strong>{sign}{Math.abs(data.rawSum).toLocaleString()}</strong>
        </p>
        <p style={{ margin: 0 }}>
          Доля: <strong>{percent.toFixed(1)}%</strong>
        </p>
      </div>
    );
  };

  if (!data || data.length === 0) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Нет данных для отображения</div>;
  }

  const getColor = (index, type) => {
    if (type === 'общее') {
      return type === 'доход' ? '#4CAF50' : '#F44336';
    }
    return COLORS[index % COLORS.length];
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            innerRadius={60}
            paddingAngle={typeOfFilteredData === 'общее' ? 0 : 2}
            dataKey="value"
            nameKey="name"
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={getColor(index, entry.typee)} 
                stroke="#fff"
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            formatter={(value, entry, index) => {
              const item = data[index];
              const percent = totalSum > 0 ? (item.value / totalSum * 100).toFixed(1) : '0';
              return `${value} (${percent}%)`;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieComponent;