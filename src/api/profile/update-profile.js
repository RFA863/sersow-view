export default async function UpdateProfile(name, bio, image, website, auth) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + "/" + process.env.NEXT_PUBLIC_VERSION + "/profile/update", {
      method: 'PATCH',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': auth,
      },
			body: JSON.parse({
				name: name,
				bio: bio,
				image: image,
				website, website,
			}),
    }).then((res) => res.json());
    
    if(res.status === 200) {
      return {status: "200"};
    } else {
      if (res.err) {
        if (res.err.type === "token") {
          return {status: "unauth"};
        } else if (res.err.type === "service") {
          if (res.err.data.code === -1) {
						return {status: "notexist"};
					} else if (res.err.data.code === -2) {
						return {status: "type"};
					} else if (res.err.data.code === -3) {
						return {status: "size"};
					}
        }
      } else {
        return {status: "err"};
      }
    }
  } catch {
    return {status: "err"};
  }
};