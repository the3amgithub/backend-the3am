export const isAuthenticated = (ctx) => {
  return ctx.user !== null;
};
export const authorize = (args, context, callback) => {
  if (isAuthenticated(context)) {
    return callback(null, args, context);
  }
  throw new Error("Access Denied!");
};
