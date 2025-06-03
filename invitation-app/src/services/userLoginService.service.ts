
const userLoginService = async (userName: string, password: string): Promise<string> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({userName, password})
    });

    const json = await response.json();
    
    if(!response.ok) throw new Error(json.message);

    return json.message;
}

export default userLoginService;