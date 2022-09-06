class Helper {
  static async fetchUser() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();

    return data;
  }
}
export default Helper;
