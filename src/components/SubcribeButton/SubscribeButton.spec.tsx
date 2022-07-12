import { render, screen, fireEvent } from "@testing-library/react";
import { mocked } from 'jest-mock'
import { signIn, useSession } from "next-auth/react";
import { SubscribeButton } from ".";
import { useRouter } from "next/router"

jest.mock('next-auth/react')
jest.mock('next/router')

describe('SubscribeButton Component', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    render(
      <SubscribeButton/>
    )

    expect(screen.getByText('Subscribe Now')).toBeInTheDocument()
  });

  it('redirect user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn)
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    render(
      <SubscribeButton/>
    )

    const subscribeButton = screen.getByText('Subscribe Now');
    fireEvent.click(subscribeButton);
    expect(signInMocked).toHaveBeenCalled()

  });

  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = mocked(useRouter)

    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce({
      data: {
        user : {
          name: "Jhon Doe",
          email: "jhon.doe@example.com",
        },
        activeSubscription: 'fake-active-subscription',
        expires: "fake-expires"
      },
      status: "authenticated",
    });

    const pushMock = jest.fn()

    useRouterMocked.mockReturnValue({
      push: pushMock
    } as any)

    render(
      <SubscribeButton/>
    )

    const subscribeButton = screen.getByText('Subscribe Now')
    fireEvent.click(subscribeButton);
    expect(pushMock).toHaveBeenCalledWith('/posts')

  });

})
