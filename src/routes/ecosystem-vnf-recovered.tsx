import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ecosystem-vnf-recovered')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ecosystem-vnf-recovered"!</div>
}
