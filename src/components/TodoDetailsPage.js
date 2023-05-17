// TodoDetailsPage
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Box, Center, Text, VStack,Button } from "@chakra-ui/react";
import Stopwatch from "./Stopwatch";
import FaceMeshPage from "./FaceMeshPage";

function TodoDetailsPage() {
  const { id } = useParams();
  const { state } = useLocation();
  const title = state && state.title;
  const previousPage = state && state.previousPage;
  const navigate = useNavigate();
  const [listtime, setlisttime] = useState('');

  const timef = (tt) => {
    console.log(tt,'hello');
    setlisttime(tt);
    console.log(listtime,'asdfasdf')

  };
  

  const goBack = (sv) => {
    navigate(`/todo`, { state: { sv} });
  };

  return (
    <VStack>
      <Box p={4}>
        <Center>
          <Text as={"b"} color={"green.700"} fontSize={"3xl"}>
            {title}
            
          </Text>
        </Center>

        <Box>
          <Stopwatch timef={timef}/>
        </Box>

        <Box my={5} bg="gray.200" padding={20} overflow="hidden" rounded="xl" shadow="dark-lg">
          <FaceMeshPage />
        </Box>

        {previousPage === 'TodoListPage' && (
          <Button onClick={goBack}>Go Back to TodoListPage</Button>
        )}

        <Button onClick={() => goBack(listtime)}>Go Back to TTTTTTTTTTTTTTTTtTodoListPage</Button>
      </Box>
    </VStack>
  );
}

export default TodoDetailsPage;
