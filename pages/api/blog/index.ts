import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Blog from "../../../model/Blog";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const { id, tag, publisher } = req.query;

        // Get blog by ID
        if (id) {
          const blog = await Blog.findById(id);
          if (!blog) {
            return res
              .status(404)
              .json({ success: false, message: "Blog not found" });
          }
          return res.status(200).json({ success: true, data: blog });
        }

        // Filter blogs by tag and/or publisher
        const query = {};
        if (tag) {
          query.tag = tag;
        }
        if (publisher) {
          query.published_by = publisher;
        }

        const blogs = await Blog.find(query);
        return res.status(200).json({ success: true, data: blogs });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: "Server Error" });
      }
    case "POST":
      try {
        const blog = await Blog.create(req.body);
        return res.status(201).json({ success: true, data: blog });
      } catch (error) {
        console.error(error);
        return res.status(400).json({ success: false, error: "Bad Request" });
      }
    default:
      return res.status(400).json({ success: false, error: "Bad Request" });
  }
}
