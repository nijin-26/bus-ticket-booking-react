import styled from '@emotion/styled';

interface IWindowWrapperProps {
    isVerticalOrientation: boolean;
}

const Window = styled('li')<IWindowWrapperProps>(
    ({ theme, isVerticalOrientation }) => ({
        '&&.no-window': { backgroundColor: 'transparent' },

        backgroundColor: theme.color.windowColor,
        position: 'absolute',
        borderRadius: '20%',

        ...(isVerticalOrientation
            ? {
                  '&.small': { width: '0.5rem', height: '3.0rem' },

                  '&.medium': { width: '0.5rem', height: '3.5rem' },

                  '&.large': { width: '0.5rem', height: '4.5rem' },

                  '&.right-window': {
                      top: 'auto',
                      right: '-2rem',
                  },

                  '&.left-window': {
                      bottom: 'auto',
                      left: '-2rem',
                  },
              }
            : {
                  '&.small': { width: '3.0rem', height: '0.5rem' },

                  '&.medium': { width: '3.5rem', height: '0.5rem' },

                  '&.large': { width: '4.5rem', height: '0.5rem' },

                  '&.right-window': {
                      top: '-2rem',
                      right: 'auto',
                  },

                  '&.left-window': {
                      bottom: '-2rem',
                      left: 'auto',
                  },
              }),
    })
);

export default Window;
