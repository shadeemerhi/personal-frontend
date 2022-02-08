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
  deleteProject: Scalars['Boolean'];
  updateProject: Project;
};


export type MutationCreateProjectArgs = {
  input: NewProjectInput;
};


export type MutationDeleteProjectArgs = {
  _id: Scalars['String'];
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};

export type NewProjectInput = {
  adminPassKey: Scalars['String'];
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
  adminPassKey: Scalars['String'];
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

export type UpdateProjectInput = {
  _id: Scalars['String'];
  adminPassKey: Scalars['String'];
  description: Scalars['String'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  inProgress: Scalars['Boolean'];
  photoFile?: InputMaybe<Scalars['Upload']>;
  photoURL: Scalars['String'];
  repositoryLinks: Array<Scalars['String']>;
  stack: Scalars['Stack'];
  startDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type CreateProjectMutationVariables = Exact<{
  input: NewProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', title: string, photoURL: string } };

export type DeleteProjectMutationVariables = Exact<{
  _id: Scalars['String'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject: boolean };

export type UpdateProjectMutationVariables = Exact<{
  input: UpdateProjectInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject: { __typename?: 'Project', _id: string, title: string, description: string, photoURL: string, startDate: any, endDate?: any | null | undefined, inProgress: boolean, repositoryLinks: Array<string>, stack: any, adminPassKey: string } };

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
export const DeleteProjectDocument = gql`
    mutation DeleteProject($_id: String!) {
  deleteProject(_id: $_id)
}
    `;
export type DeleteProjectMutationFn = Apollo.MutationFunction<DeleteProjectMutation, DeleteProjectMutationVariables>;

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useDeleteProjectMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProjectMutation, DeleteProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(DeleteProjectDocument, options);
      }
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>;
export type DeleteProjectMutationResult = Apollo.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<DeleteProjectMutation, DeleteProjectMutationVariables>;
export const UpdateProjectDocument = gql`
    mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
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
    adminPassKey
  }
}
    `;
export type UpdateProjectMutationFn = Apollo.MutationFunction<UpdateProjectMutation, UpdateProjectMutationVariables>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProjectMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectMutation, UpdateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(UpdateProjectDocument, options);
      }
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = Apollo.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<UpdateProjectMutation, UpdateProjectMutationVariables>;
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