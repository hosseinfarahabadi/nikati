import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

export default function RecomCard({ image, name, title, comment }) {
  return (
    <>
      <img className="customer-avatar" src={image} />

      <div className="cutomer-container ">
        <p className=" customer-title typography-h3">{name}</p>
        <p className="customer-subtitle typography-body">{title}</p>
        <p className="customer-text-detail typography-body15 ">{comment}</p>
      </div>
    </>
  );
}
