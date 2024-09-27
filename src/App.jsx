import { ChakraProvider, Card, CardBody } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Card className="w-1/2 h-20" size="4xl">
          <CardBody className="bg-gray-400">Hi there!</CardBody>
        </Card>
      </ChakraProvider>
    </>
  );
}

export default App;
