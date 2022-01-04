let obj = {
  Nebraska: {
    Omaha: "large city",
    Lincoln: "small city",
  },
  Texas: {
    Dallas: "large city",
    Austin: "small city",
  },
};

try {
  console.log(obj["New York"]["New York"]);
} catch (e) {
  console.log("Catching that error");
  console.log(e.message);
} finally {
  console.log("Moving on!");
}
