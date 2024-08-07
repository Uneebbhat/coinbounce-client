import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import useChangeTitle from "@/hooks/useChangeTitle";
import useLogin from "@/hooks/useLogin.js";
import togglePassword from "@/utils/togglePassword";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const LoginPage = () => {
  const { handleInputChange, handleForm, isCreating, formData } = useLogin();
  const { showPass, togglePass } = togglePassword();
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
              <div className="flex items-center relative">
                <Input
                  required
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="********"
                  onChange={handleInputChange}
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Eye
                        className="absolute right-5 top-2 w-5 cursor-pointer"
                        onClick={togglePass}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{showPass ? "Hide password" : "Show password"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
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
            <Separator className="mt-4" />
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
