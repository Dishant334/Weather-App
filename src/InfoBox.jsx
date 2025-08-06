import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info}){
  const Hot_URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyfGVufDB8fDB8fHww"
const Cold_URL = "https://images.unsplash.com/photo-1435777940218-be0b632d06db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGR8ZW58MHx8MHx8fDA%3D"
const Rain_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJhaW58ZW58MHx8MHx8fDA%3D";



  
    
return( <div className="InfoBox">
     <Card className="glassdoor" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? Rain_URL : info.temp >15 ? Hot_URL : Cold_URL} 
        style={{objectFit:'cover'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <div>Temperature - {info.temp}&deg;</div>
         <div>Humidity - {info.humidity}</div>
         <div>Min Temp - {info.tempMin}&deg;C</div>
         <div>Max Temp - {info.tempMax}&deg;C </div>
         <div>The Weather can be described as {info.weather} & feels like {info.feelsLike}&deg;C</div>

        </Typography>
      </CardContent>
      
    </Card>
</div>)
}