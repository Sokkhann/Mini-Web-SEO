import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner color="success" aria-label="Success spinner example" size="xl" />
    </div>
  )
}
