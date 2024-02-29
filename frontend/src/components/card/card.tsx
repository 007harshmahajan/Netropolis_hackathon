import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { useEffect } from "react";
  
   
  export function Cards(props) {
    useEffect(() =>{
        console.log(props.quest.tasks[0].image)
    })
    return (
      <Card className="mt-6 w-96 p-4">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={props.quest.tasks[0].image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody className="mt-1">
          <div className="flex justify-between font-semibold">
            <Typography variant="h5" color="blue-gray" className="mb-2 ">
            {props.quest.title}
            </Typography>
            <div>{props.quest.tasks[0].start_date.slice(0,10)}-{props.quest.tasks[0].end_date.slice(0,10)}</div>
          </div>
            <Typography >
                {props.quest.tasks[0].address}</Typography>
          <Typography className="">
            {props.quest.tasks[0].description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
  }