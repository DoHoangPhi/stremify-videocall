import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { signup } from '../lib/api.js';

const useSignUp = () => {
    const queryClient = useQueryClient();

    const { mutate: signupMutattion, isPending, error } = useMutation({
        mutationFn: signup,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
    });
    return { isPending, error, signupMutattion };
}

export default useSignUp