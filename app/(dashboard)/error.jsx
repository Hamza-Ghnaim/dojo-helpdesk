"use client"

export default function error({error,reset}){
    return(
        <main>
            <h2 className="text-center">oh no !</h2>
            <p className="text-4xl">{error.message}</p>
            <button
            onClick={reset}
            >
                try again 
            </button>
        </main>
    )
}