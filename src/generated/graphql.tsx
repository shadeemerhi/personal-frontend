import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** A project tech stack */
  Stack: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
};


export type MutationCreateProjectArgs = {
  input: NewProjectInput;
};

export type NewProjectInput = {
  description: Scalars['String'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  inProgress: Scalars['Boolean'];
  photoFile: Scalars['Upload'];
  repositoryLinks: Array<Scalars['String']>;
  stack: Scalars['Stack'];
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  _id: Scalars['String'];
  description: Scalars['String'];
  endDate?: Maybe<Scalars['DateTime']>;
  inProgress: Scalars['Boolean'];
  photoURL: Scalars['String'];
  repositoryLinks: Array<Scalars['String']>;
  stack: Scalars['Stack'];
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  project: Project;
  projects: Array<Project>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};

export type CreateProjectMutationVariables = Exact<{
  input: NewProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', title: string, photoURL: string } };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', _id: string, title: string, description: string, photoURL: string, startDate: any, endDate?: any | null | undefined, inProgress: boolean, repositoryLinks: Array<string>, stack: any }> };


export const CreateProjectDocument = gql`
    mutation CreateProject($input: NewProjectInput!) {
  createProject(input: $input) {
    title
    photoURL
  }
}
    `;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const ProjectsDocument = gql`
    query Projects {
  projects {
    _id
    title
    description
    photoURL
    description
    startDate
    endDate
    inProgress
    repositoryLinks
    stack
  }
}
    `;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
      }
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
        }
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;