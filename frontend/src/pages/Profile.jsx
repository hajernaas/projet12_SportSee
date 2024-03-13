import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserInfo } from "../service/Api";

function Profile() {
	const { userId } = useParams();
	console.log("userId", userId);
	const [fetchedData, setData] = useState({});

	const [error, setError] = useState(null);
	//const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await UserInfo(userId);
				console.log("d", data);
				//const userinfo = new UserData(data).getUserData();

				console.log("firstname", data.userInfos.firstName);
				//console.log("firs", userinfo.userInfos.firstName);

				if (data) {
					setData(data);
				} else {
					throw new Error("Aucune donnée disponible.");
				}
				//setData(userinfo);
				//setUser({ user: userinfo });
			} catch (error) {
				setError(error.message);
			}
		};

		//if (userId) {
		fetchData();
		//}
	}, [userId]);

	if (error) return <Navigate to="/Error" />;

	return (
		<main>
			<>
				<h1>
					Salut <span>{fetchedData?.id}</span>
				</h1>
				<h3>
					bjr <span>{fetchedData?.score}</span>
				</h3>
				<h3>
					salut M. <span>{fetchedData?.userInfos?.firstName}</span>
				</h3>
				<h3>
					data ket <span>{fetchedData?.keyData?.calorieCount}</span>
				</h3>

				<h2>Félicitation ! Vous avez explosé vos objectifs hier ?? </h2>
			</>
		</main>
	);
}

export default Profile;
