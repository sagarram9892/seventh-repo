import {render, screen} from "@testing-library/react"
import App from "./App"


test('should', async() => {
render(<App/>)
const el=await screen.findAllByRole("li")
expect(el).toHaveLength(10)
})
