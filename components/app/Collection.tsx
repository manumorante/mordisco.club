function Collection({ children, collection }: { children: any; collection: any[] }) {
  return (
    <>
      {collection.map(() => {
        return <>{children}</>
      })}
    </>
  )
}

export default Collection
