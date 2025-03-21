import { useParams } from "react-router-dom";

function ScanPage() {
  const { serializedSettings } = useParams<{
    serializedSettings: string;
  }>();

  return (
    <>
      <h1>Scan page</h1>
      <code>{serializedSettings}</code>
    </>
  );
}

export default ScanPage;
