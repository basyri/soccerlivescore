import axios from 'axios';

const BASE_URL='https://client.elevenscore.com'
const API_KEY='24578cdb-fc01-4794-9bb0-865dd8ac405c'


function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('');
}

const getUTC = () => {
    var d = new Date();
    var n = d.getUTCDate();

    return n
}


export const fetchMatches = async () => {
  const options = {
    headers: { 
        'X-Api-Key': API_KEY
    }
  };


let {data} = await axios.get(
    `${BASE_URL}/api/football/match/matchfixtures?date=${formatDate()}&utc=${getUTC()}`,
    options
    )

    let {result} = data

    return result
};



// export const getLiveMatch = (matchId) => {
//     const options = {
//         url: `${BASE_URL}/api/football/match/live/${matchId}`,
//         headers: { 
//             'X-Api-Key': API_KEY
//         }
//       };
    
//       return axios(options)
//       .then(data=>{
//           console.log(data);
    
//         })
//       .catch(err=>console.log(err))
// }

export const getMatchDetail = async(matchId) => {
    const options = {
        headers: { 
            'X-Api-Key': API_KEY
        }
      };
    
    
    let {data} = await axios.get(
        `${BASE_URL}/api/football/match/matchdetail/${matchId}`,
        options
        )
    
        return data
}
