const API_URL = "https://api.github.com/users/AbhishekBhati108";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jasonValue = await data.json();
    console.log(jasonValue);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
