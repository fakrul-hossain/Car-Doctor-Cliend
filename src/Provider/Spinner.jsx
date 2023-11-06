import { Spinner } from "@material-tailwind/react";
 
export function DefaultSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Spinner />
    </div>
  );
}