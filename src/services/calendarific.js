import axios from 'axios'

export const getHoliday = (country)=> {
    console.log('calling... api',country)
    var apiKey = 'DU6OKC0XfoP5aESXBw5Di4WttXlWftqT'
    var year = '2024'
    var calendarific = `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${country}&year=${year}`
   return axios.get(calendarific).then((res)=>{
            console.log('response calendarific',res.data.response.holidays)
            return res.data.response.holidays
    })
}

