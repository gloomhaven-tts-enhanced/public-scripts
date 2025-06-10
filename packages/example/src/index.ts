import { Scenario } from "@gloomhaven-enhanced/data";

const main = () => {
  // Define some scenario data. It's obviously incomplete here, so TS would complain
  //@ts-expect-error
  const data: Scenario = {
    name: "Hello World",
  };

  // Use the data validator given some unknown object.
  // If the definition is valid, `res.value` will contain the scenario object
  // Otherwise it will contain an error object, where `issues` lists the validation errors
  const res = Scenario({
    name: "Hello World",
    campaign: "Custom Campaign",
  });

  // check if the validation failed and issues exist
  if (res.issues) {
    // log all the issues
    console.error(res.issues);
  } else {
    // validation is fine! So .value contains the validated data object
    console.log(res.value);
  }

  // Many more type definitions/validator exist!
  // E.g. for the campaing file format, the class info on class envelopes or monster definitions
};

main();
