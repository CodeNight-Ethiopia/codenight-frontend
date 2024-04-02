# Contribution Guidelines

Thank you for considering contributing to our project! We welcome any and all contributions, including bug reports, feature requests, code changes, and documentation improvements. To ensure a smooth and efficient collaboration, please read and follow these guidelines before submitting your contribution.

## Getting Started

Before you start working on the project, please follow these steps:

1. Fork the repository to your own account
2. Clone the repository to your local machine
3. Install the required dependencies by running `pnpm install`
4. Install [pre-commit](https://pre-commit.com/)
5. Run `pre-commit install && pre-commit install --hook-type pre-push` on the base directory
6. Create a new branch for your changes

## Making Changes

When making changes to the code, please keep the following in mind:

1. Write clear and concise commit messages
2. Follow the existing code style and conventions
3. You code will be formatted using pre-commits before you commit any changes if you want to run it manually please run `pnpm run format:write`
4. A linter will also run before every commit to ensure that your changes follow our code style if you want to perform manual check please run `pnpm run lint:next`
5. Check that your changes type-check by running `pnpm run type:check`
6. Update the documentation if necessary

## Submitting Changes

Once you have made your changes, please submit a pull request to the main repository. Here are some tips to help ensure a successful submission:

1. Give your pull request a descriptive title and summary
2. Explain the reasoning behind your changes in the description
3. Provide any necessary context or links to related issues or pull requests
4. Make sure your changes pass all checks (formatting, linting, and type-checking)
5. Be open to feedback and willing to make changes if necessary

## Code of Conduct

As contributors and maintainers of this project, we pledge to follow the [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and inclusive environment for everyone.

## License

This project is licensed under the [MIT License](LICENSE.md). By contributing to this project, you agree to license your contribution under the same license.
