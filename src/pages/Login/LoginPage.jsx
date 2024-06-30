import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import useChangeTitle from "@/hooks/useChangeTitle";
import useLogin from "@/hooks/useLogin.js";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { handleInputChange, handleForm, isCreating, formData } = useLogin();
  useChangeTitle("Coinbounce | Login to your world");

  return (
    <>
      <div className="form-wrapper max-w-full w-[500px] mx-auto my-[40px]">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Login to your account</CardTitle>
            <CardDescription>
              Enter your credentials below to login
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                required
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                onChange={handleInputChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                required
                id="password"
                name="password"
                type="password"
                placeholder="********"
                onChange={handleInputChange}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              className="w-full"
              type="submit"
              onClick={handleForm}
              disabled={isCreating || !formData.email || !formData.password}
            >
              {isCreating ? "Please wait" : "Login"}
            </Button>
            <CardDescription className={"mt-2 text-[16px] text-black"}>
              Don't have an account?{" "}
              <Link className={"font-bold"} to={"/signup"}>
                Signup
              </Link>
            </CardDescription>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
