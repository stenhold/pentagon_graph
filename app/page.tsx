import dynamic from 'next/dynamic';

const PentagonChart = dynamic(() => import('../components/PentagonChart.client'), {
  ssr: false
});


export default function Home() {
  const data = [
    { category: 'Mood', value: 0.8 },
    { category: 'Energy', value: 0.7 },
    { category: 'Stress', value: 0.3 },
    { category: 'Sleep', value: 0.9 },
    { category: 'Diet', value: 0.5 }
  ];

  return (
    <div>
      <h1>Mental Health Checkup</h1>
      <PentagonChart data={data} />
    </div>
  );
}
