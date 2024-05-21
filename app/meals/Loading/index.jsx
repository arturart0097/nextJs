import { Spinner } from "@chakra-ui/spinner";

export default function LoadinOut() {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Spinner
        width="70px"
        height="70px"
        color="orange"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
        }}
      />
    </div>
  );
}
