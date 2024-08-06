import {
  Box,
  Button,
  Callout,
  Flex,
  Heading,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useSignIn } from "../features/use-sign-in";

export const SignInPage = () => {
  const { error, handleFormSubmit, isLoading } = useSignIn();

  return (
    <>
      <Heading as="h3" size="6" trim="start" mb="5">
        Sign up
      </Heading>

      <form onSubmit={handleFormSubmit}>
        <Box mb="5">
          <Flex mb="1">
            <Text
              as="label"
              htmlFor="example-user-field"
              size="2"
              weight="bold"
            >
              Name
            </Text>
          </Flex>
          <TextField.Root
            name="name"
            placeholder="Enter your name"
            id="example-user-field"
          />
        </Box>

        <Box mb="5" position="relative">
          <Flex align="baseline" justify="between" mb="1">
            <Text
              as="label"
              size="2"
              weight="bold"
              htmlFor="example-password-field"
            >
              Password
            </Text>
          </Flex>
          <TextField.Root
            name="password"
            autoComplete="on"
            type="password"
            placeholder="Enter your password"
            id="example-password-field"
          />
        </Box>

        <Flex mt="6" justify="end" gap="3">
          <Button loading={isLoading} type="submit">
            Sign in
          </Button>
        </Flex>
      </form>
      {error ? (
        <Callout.Root className="mt-2">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      ) : null}
    </>
  );
};
