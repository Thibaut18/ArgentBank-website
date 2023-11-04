import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from "../features/userProfile/userProfileSlice";
import {
	usePutNewUserNameMutation,
	usePostProfileMutation,
} from "../features/api/apiSlice";
import { createSelector } from "reselect";
import "../styles/Sass/EditUserName.scss";

const selectUserData = createSelector(
	(state) => state.auth.isLoggedIn,
	(state) => state.user,
	(isLoggedIn, user) => ({
		isLoggedIn,
		userProfile: user,
	}),
);

const EditUserName = () => {
	const { isLoggedIn: token, userProfile } = useSelector(selectUserData);

	const dispatch = useDispatch();
	const [editName, setEditName] = useState(false);
	const [newUserName, setNewUserName] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [postProfile] = usePostProfileMutation();
	const [putNewUserName] = usePutNewUserNameMutation();

	useEffect(() => {
		if (userProfile && userProfile.userName) {
			postProfileData();
		}
	}, [userProfile?.userName]);

	const postProfileData = async () => {
		try {
			const data = await postProfile(token).unwrap();
			dispatch(setUserProfile(data.body));
			setNewUserName(userProfile?.userName);
		} catch (error) {
			console.error("Error posting profile:", error);
		}
	};

	const handleChange = (e) => {
		setNewUserName(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (newUserName.length <= 3) {
			setErrorMessage("Username must be at least 4 characters long");
			return;
		}

		setErrorMessage("");
		setEditName(false);
		try {
			await putNewUserName({ token, userName: newUserName });
			await postProfileData();
		} catch (error) {
			console.error("Error updating username:", error);
		}
	};

	return (
		<>
			{editName ? (
				<form onSubmit={handleSubmit} className="user-edit-form">
					{[
						{
							id: "firstName",
							label: "First Name",
							value: userProfile?.firstName,
							disabled: true,
						},
						{
							id: "lastName",
							label: "Last Name",
							value: userProfile?.lastName,
							disabled: true,
						},
						{
							id: "userName",
							label: "Username",
							value: newUserName,
							onChange: handleChange,
							disabled: false,
							required: true,
						},
					].map((field) => (
						<div key={field.id} className="user-edit-form-label-and-input">
							<label className="user-edit-form-label" htmlFor={field.id}>
								{field.label}
							</label>
							<input
								type="text"
								id={field.id}
								className="user-edit-form-input"
								value={field.value}
								onChange={field.onChange}
								disabled={field.disabled || false}
								required={field.required || false}
							/>
						</div>
					))}
					<p className="error-message">{errorMessage}</p>
					<div className="user-edit-form-save-and-cancel-btn">
						<button type="submit" className="user-edit-form-btn">
							Save
						</button>
						<button
							type="button"
							className="user-edit-form-btn"
							onClick={() => setEditName(false)}
						>
							Cancel
						</button>
					</div>
				</form>
			) : (
				<button
					className="user-edit-form-btn"
					onClick={() => setEditName(true)}
				>
					Edit Name
				</button>
			)}
		</>
	);
};

export default EditUserName;
