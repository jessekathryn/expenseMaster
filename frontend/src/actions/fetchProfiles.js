export function fetchProfiles() {
	return (dispatch) => {
		fetch("http://localhost:3000/api/v1/profiles")
			.then((resp) => resp.json())
			.then((profiles) =>
				dispatch({
					type: "FETCH_PROFILES",
					payload: profiles,
				})
			);
	};
}
