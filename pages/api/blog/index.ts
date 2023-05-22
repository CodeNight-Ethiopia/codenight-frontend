import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Blog from "../../../model/Blog";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("api called");
  const { method } = req;

  await dbConnect();
  console.log("method : ", method);

  switch (method) {
    case "GET":
      try {
        console.log("get method called");
        const blogs = await Blog.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: blogs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log("post method called");
        const blog = await Blog.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: blog });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
