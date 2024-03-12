//import ActivityChart from "../components/Activity";
import { Link } from "react-router-dom";
function Home() {
	return (
		<main>
			<div>
				{/* <ActivityChart /> */}
				<h2>logo sqkdlksq</h2>
			</div>

			<section>
				<h1>HOME</h1>
				<ul>
					<li>
						<Link to="/user/12">
							<p>Karl</p>
							<p>(id: 12)</p>
						</Link>
					</li>
					<li>
						<Link to="/user/18">
							<p>Cécilia</p>
							<p>(id: 18)</p>
						</Link>
					</li>
				</ul>
			</section>
		</main>
	);
}

export default Home;
