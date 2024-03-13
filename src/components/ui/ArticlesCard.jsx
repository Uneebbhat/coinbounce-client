import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ArticlesCard = ({ data }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, backgroundColor: "#1e1e1e", color: "white" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={data.urlToImage}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card-title"
          >
            {data.title}
          </Typography>
          <Typography variant="body2" color="text" className="card-description">
            {data.description}
          </Typography>
        </CardContent>
        <Link to={data.url} target="_blank">
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Link>
      </Card>
    </>
  );
};

export default ArticlesCard;
