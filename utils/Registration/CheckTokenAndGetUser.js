export const getUser = async (dispatch) => {
  console.log("starting");

  if (token) {
    try {
      const UserRequestWithToken = getUserRequestWithToken(token);
      const { data } = await UserRequestWithToken.post("auth/verifyToken", {
        mes: "hello",
      });

      if (data.message._id) {
        return;
      } else {
        alert("Error Getting User ");
      }
    } catch (error) {
      console.error(error, "error me");
      if (error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  }
};
