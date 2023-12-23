const gitHubInfo = async () => {
    const res = await fetch("https://api.github.com/users/Its-sunny69")
    const data = res.json()
    console.log(data)
    return data
}

export default gitHubInfo;