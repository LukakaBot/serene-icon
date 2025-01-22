import request from '@/utils/request';

export default async function Home() {
	const res = await request.get(
		'http://36.133.91.245:6084/x/edp/customerDemandController/selectDemand'
	);
	// const res = await fetch(
	// 	'http://36.133.91.245:6084/x/edp/customerDemandController/selectDemand'
	// );
	console.log(res);
	console.log(process.env)

	return (
		<>
			<h1>我是首页</h1>
		</>
	);
}
