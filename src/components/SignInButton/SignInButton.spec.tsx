import { render, screen } from "@testing-library/react";
import { mocked } from 'jest-mock'
import { useSession } from "next-auth/react";
import { SignInButton } from ".";

jest.mock('next-auth/react')

describe('SignInButton Component', () => {
  it('renders correctly when user is not authenticate', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])
    render(
      <SignInButton/>
    )

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()

  })

  it('renders correctly when user is not authenticate', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: {
        user : {
          name: "Jhon Doe",
          email: "jhon.doe@example.com",
        },
        expires: "fake-expires"
      },
      status: "authenticated",
    });

    render(
      <SignInButton/>
    )

    expect(screen.getByText('Jhon Doe')).toBeInTheDocument()

  })
})
