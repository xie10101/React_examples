import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(
      [
        {
          id: "1",
          attributes: {
            name: "xxxxx",
            age: 12,
            gender: "男",
            address: "hua",
          },
        },
        {
          id: "2",
          attributes: {
            name: "hhhh",
            age: 12,
            gender: "男",
            address: "hua",
          },
        },
      ]
    ));
  }),
];
