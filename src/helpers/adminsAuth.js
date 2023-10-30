const adminAuth = () => {
        const token = localStorage.getItem("token");

        const config = {
            headers: {
                "Content-type" : "application/json"
            }
        }

        if(token){
            config.headers["x-access-token-admin"] = token;
        }
        
        return config
} 

export default adminAuth;