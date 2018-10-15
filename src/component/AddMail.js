import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_TODO = gql`
  mutation AddMail($type: String!) {
    addMail(type: $type) {
      id
      email           
    }
  }
`;

const AddMail = () => {
    let input;

    return (
        <Mutation mutation={ADD_MAIL}>
            {(addMail, { data }) => (
                <div>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            addMail({ variables: { type: input.value } });
                            input.value = "";
                        }}
                    >
                        <input
                            ref={node => {
                                input = node;
                            }}
                        />
                        <button type="submit">Add Todo</button>
                    </form>
                </div>
            )}
        </Mutation>
    );
};