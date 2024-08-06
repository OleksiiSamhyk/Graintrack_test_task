const wait = async (howLongToWait: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, howLongToWait);
  });
};

export const loginUser = async (login: string, password: string) => {
  await wait(250);

  if (password === "Test123") {
    return {
      name: login,
    };
  }
  throw new Error("Wrong password, try Test123");
};
