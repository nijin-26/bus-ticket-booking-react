import { Component, ErrorInfo } from 'react';

export interface IErrorBoundaryProps {
    children: React.ReactNode;
}
export interface IErrorState {
    hasError: boolean;
    error: { message: string };
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: { message: '' } };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error: ', error, errorInfo);
        this.setState({ hasError: true, error: { message: error.message } });
    }

    render() {
        if (this.state.hasError) {
            return <div>Something went wrong.{this.state.error.message}</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
