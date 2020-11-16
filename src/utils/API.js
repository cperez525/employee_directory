import axios from "axios"

export default {
    getEmployees: function() {
      return axios.get(
        "https://randomuser.me/api/?results=20&inc=name,location,email,phone,dob,picture"
      );
    }
  };