So, here it's starting...

barebone jsx function:
      {new Date().getFullYear()}


a simple function in react:

const getCurrentYear = () => {
  return new Date().getFullYear();
};

{getCurrentYear()}

interpolation:
https://egghead.io/lessons/react-understand-and-use-interpolation-in-jsx

let's say we would like to notify user with a wellcome message depends on time:

function GreetUser({num}){
    return (
        <div>
        {`Hello "${num}"` }
        {num > 10 ? <b>{num}</b> : {num} is op }
        </div>
    )
}

<GreetUser num="10">
