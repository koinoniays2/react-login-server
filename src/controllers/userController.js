export const memberRegister = (req,res) => res.send({ name: "register" });
export const memberLogin = (req,res) => res.send({name: "login"});
export const loginSuccess = (req,res) => res.send({name: "success"});
export const logout = (req,res) => res.send({name: "logout"});
export const kakaoLogin = (req,res) => res.send({name: "kakao"});